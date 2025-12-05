// components/(video)/DialogVideo.tsx
"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "../ui/dialog";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import supabase from "../../lib/supabaseClient";
import Player from '@vimeo/player';

interface VideoProps {
  video: boolean;
  setVideo: (state: boolean) => void;
  userId: string;
}

function DialogVideo({ video, setVideo, userId }: VideoProps) {
  const [showJoinButton, setShowJoinButton] = useState(false);
  const [joiningNow, setJoiningNow] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const playerRef = useRef<Player | null>(null);
  const joinButtonTimerRef = useRef<NodeJS.Timeout | null>(null);

  // WhatsApp group invite link
  const WHATSAPP_GROUP_LINK = `${process.env.NEXT_PUBLIC_WHATSAPP_LINK}`;

  // Track when video starts
  useEffect(() => {
    if (video && userId) {
      supabase
        .from("onboarding")
        .update({ 
          video_started_at: new Date().toISOString(),
          status: 'video_watching'
        })
        .eq("user_id", userId)
        .then(() => console.log("📹 Video started tracked"));
    }
  }, [video, userId]);

  useEffect(() => {
    if (showJoinButton && userId) {
      
      // Schedule reminder email after 10 minutes
      joinButtonTimerRef.current = setTimeout(async () => {
        // Check if user already joined
        const { data: onboarding } = await supabase
          .from('onboarding')
          .select('join_clicked_at')
          .eq('user_id', userId)
          .single();

        if (!onboarding?.join_clicked_at) {
          // User hasn't joined - schedule reminder
          await fetch('/api/queue/schedule-reminder', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              userId,
              delayMs: 0, // Send immediately (we already waited 10 mins)
            }),
          });
        } else {
          return ;
        }
      }, 10 * 60 * 1000); // 10 minutes

      // Cleanup timer on unmount
      return () => {
        if (joinButtonTimerRef.current) {
          clearTimeout(joinButtonTimerRef.current);
        }
      };
    }
  }, [showJoinButton, userId]);

  const handleVideoEnd = async () => {
    // Track video completion
    await supabase
      .from("onboarding")
      .update({ 
        video_finished_at: new Date().toISOString(),
        status: 'video_completed'
      })
      .eq("user_id", userId);
    setShowJoinButton(true); 
  };

  const handleClose = async () => {
    await supabase
      .from("onboarding")
      .update({ 
        status: 'video_closed'
      })
      .eq("user_id", userId);
    setShowJoinButton(true); 
  };

  const handleJoinNow = async () => {
    setJoiningNow(true);
    
    try {
      // Clear the reminder timer
      if (joinButtonTimerRef.current) {
        clearTimeout(joinButtonTimerRef.current);
      }

      // 1️⃣ Track join click
      await supabase
        .from("onboarding")
        .update({ 
          join_clicked_at: new Date().toISOString(),
          status: 'joined'
        })
        .eq("user_id", userId);

      // 2️⃣ Cancel any scheduled reminder emails
      await fetch("/api/queue/cancel-reminder", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId }),
      });

      // 3️⃣ Redirect to WhatsApp group
      window.open(WHATSAPP_GROUP_LINK, '_blank');
      
      // Close the dialog after a short delay
      setTimeout(() => {
        setVideo(false);
        setShowJoinButton(false); // Reset for next time
      }, 500);
      
    } catch (error) {
      console.error("Error joining:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setJoiningNow(false);
    }
  };

  const toggleMute = () => {
    if (playerRef.current) {
      if (isMuted) {
        playerRef.current.setVolume(1);
        setIsMuted(false);
      } else {
        playerRef.current.setVolume(0);
        setIsMuted(true);
      }
    }
  };

  const handleIframeLoad = (e: React.SyntheticEvent<HTMLIFrameElement>) => {
    const iframe = e.target as HTMLIFrameElement;
    const player = new Player(iframe);
    playerRef.current = player;

    // Listen for ended event
    player.on("ended", () => {
      handleVideoEnd();
    });


    // Try to unmute after a short delay
    setTimeout(() => {
      player.setVolume(1).then(() => {
        setIsMuted(false);
      }).catch((error) => {
        console.log("Could not unmute automatically:", error);
      });
    }, 1000);
  };

  return (
    <Dialog 
      open={video} 
      onOpenChange={(open) => {
        setVideo(open);
      }}
    >
      <DialogContent className="backdrop-blur-md bg-white/80 max-w-[90vw] sm:max-w-[700px] rounded-xl shadow-2xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.85 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
        >
          <DialogHeader>
            <DialogTitle className="text-center text-lg sm:text-xl font-semibold text-emerald-700">
              Welcome to KavodFin 🎉
            </DialogTitle>
          </DialogHeader>

          {!showJoinButton ? (
            <div className="mt-4 w-full aspect-video rounded-lg overflow-hidden shadow-lg relative">
              <iframe
                className="w-full h-full"
                src="https://player.vimeo.com/video/1143372138?autoplay=1&title=0&byline=0&portrait=0"
                title="KavodFin Introduction Video"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                onLoad={handleIframeLoad}
              />
              
              {/* Custom Unmute Button */}
              <button
                onClick={toggleMute}
                className="absolute bottom-4 right-4 bg-black/60 hover:bg-black/80 text-white p-3 rounded-full transition-all shadow-lg z-10"
                aria-label={isMuted ? "Unmute" : "Mute"}
              >
                {isMuted ? (
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM12.293 7.293a1 1 0 011.414 0L15 8.586l1.293-1.293a1 1 0 111.414 1.414L16.414 10l1.293 1.293a1 1 0 01-1.414 1.414L15 11.414l-1.293 1.293a1 1 0 01-1.414-1.414L13.586 10l-1.293-1.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z" clipRule="evenodd" />
                  </svg>
                )}
              </button>
            </div>
          ) : (
            <div className="mt-4 text-center py-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Ready to Start Your Forex Journey?
              </h3>
              <p className="text-gray-600 mb-6">
                Click below to join our WhatsApp group and get started with copy trading!
              </p>

              <Button
                onClick={handleJoinNow}
                disabled={joiningNow}
                className="px-8 py-3 bg-emerald-600 hover:bg-emerald-500 text-white text-lg rounded-md flex items-center gap-2 mx-auto"
              >
                {joiningNow ? (
                  "Opening WhatsApp..."
                ) : (
                  <>
                    <svg 
                      className="w-6 h-6" 
                      fill="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                    Join WhatsApp Group 🚀
                  </>
                )}
              </Button>
            </div>
          )}

          <DialogFooter className="mt-4 flex justify-center">
            {!showJoinButton && (
              <Button
                onClick={handleClose}
                className="px-6 py-2 bg-gray-600 hover:bg-gray-500 text-white rounded-md"
              >
                Close
              </Button>
            )}
          </DialogFooter>
        </motion.div>
      </DialogContent>
    </Dialog>
  );
}

export default DialogVideo;