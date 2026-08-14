import { AnimatePresence, motion } from "framer-motion";

interface LoadingScreenProps {
  loading: boolean;
}

export function LoadingScreen({ loading }: LoadingScreenProps) {
  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-forest-dark"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="font-display text-4xl font-semibold tracking-wide text-cream"
          >
            Nitin<span className="text-gold"> Foods</span>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-2 text-xs uppercase tracking-[0.4em] text-cream/60"
          >
            Pure &middot; Fresh &middot; Frozen
          </motion.p>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "12rem" }}
            transition={{ duration: 1.4, ease: "easeInOut" }}
            className="mt-8 h-[2px] overflow-hidden bg-cream/10"
          >
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              className="h-full w-1/2 bg-gold"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
