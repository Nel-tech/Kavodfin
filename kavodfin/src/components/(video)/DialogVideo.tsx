"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "../ui/dialog";
import { Button } from "../ui/button";
import { motion, AnimatePresence } from "framer-motion";

interface VideoProps {
  video: boolean;
  setVideo: (state: boolean) => void;
}

function DialogVideo({ video, setVideo }: VideoProps) {
  return (
    <AnimatePresence>
      {video && (
        <Dialog open={video} onOpenChange={setVideo}>
          <DialogContent asChild>
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.85 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="backdrop-blur-md bg-white/80 max-w-[90vw] sm:max-w-[700px] rounded-xl shadow-2xl"
            >
              <DialogHeader>
                <DialogTitle className="text-center text-lg sm:text-xl font-semibold text-emerald-700">
                  Welcome to KavodFin 🎉
                </DialogTitle>
              </DialogHeader>

              <div className="mt-4 w-full aspect-video rounded-lg overflow-hidden shadow-lg">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/YOUR_VIDEO_ID?autoplay=1"
                  title="KavodFin Introduction Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              <DialogFooter className="mt-4 flex justify-center">
                <Button
                  onClick={() => setVideo(false)}
                  className="px-6 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-md"
                >
                  Close
                </Button>
              </DialogFooter>
            </motion.div>
          </DialogContent>
        </Dialog>
      )}
    </AnimatePresence>
  );
}

export default DialogVideo;
