'use client';

import { useEffect, ReactNode } from 'react';

export function ScrollAnimationClient({ children }: { children: ReactNode }) {
  useEffect(() => {
    // Create intersection observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Add in-view class when element enters viewport
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          } else {
            // Remove in-view class when element leaves viewport to retrigger animation
            entry.target.classList.remove('in-view');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    // Observe all scroll-animate elements
    const elements = document.querySelectorAll(
      '.scroll-animate, .scroll-animate-left, .scroll-animate-right, .scroll-animate-scale, .scroll-animate-image'
    );

    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      elements.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);

  return <>{children}</>;
}
