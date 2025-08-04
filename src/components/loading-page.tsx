"use client";

import { cn } from "@/lib/utils";
import { AnimatedSpan, Terminal, TypingAnimation } from "@/components/magicui/terminal";
import { useEffect, useState } from "react";
import { motion } from "motion/react";

interface LoadingPageProps {
  onComplete?: () => void;
  className?: string;
}

export const LoadingPage = ({ onComplete, className }: LoadingPageProps) => {
  const [showScrollHint, setShowScrollHint] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowScrollHint(true);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.body.style.overflow = 'auto';
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div
      className={cn(
        "w-full h-full flex flex-col items-center justify-center bg-background",
        className
      )}
    >
      {/* Terminal 组件 */}
      <div className="flex flex-col items-center space-y-8">
        <Terminal className="w-[600px] h-[320px] max-w-none max-h-none">
          <TypingAnimation delay={500} duration={80}>
            {"> $ whoami"}
          </TypingAnimation>
          <AnimatedSpan delay={2000} className="text-black-500">
              <span>> ruiyangdai</span>
          </AnimatedSpan>

          <AnimatedSpan delay={3500}>
            <TypingAnimation delay={3500} duration={60}>
              {"> $ ls"}
            </TypingAnimation>
          </AnimatedSpan>

            <AnimatedSpan delay={5000} className="text-black-500">
              <span>> portfolio  myblog  photos  .git</span>
          </AnimatedSpan>
          
          <AnimatedSpan delay={6500}>
            <TypingAnimation delay={6500} duration={60}>
              {"> $ ./portfolio"}
            </TypingAnimation>
          </AnimatedSpan>
          <AnimatedSpan delay={8000} className="text-green-500">
              <span>  ✔ Welcome to my portfolio...</span>
          </AnimatedSpan>
        </Terminal>

        {/* 滚动提示 */}
        {showScrollHint && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center space-y-2 text-muted-foreground"
          >
            <p className="text-sm">Scroll down to continue</p>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex flex-col items-center"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
};
