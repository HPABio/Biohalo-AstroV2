"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, Briefcase, Calendar } from "lucide-react";
import { Card, CardContent } from "@workspace/ui/components/card";
import { Badge } from "@workspace/ui/components/badge";

export type TimelineMilestone = {
  year: string;
  items: string[];
};

const roadmapMilestones: TimelineMilestone[] = [
  {
    year: "2026",
    items: [
      "Strain optimization",
      "First m³-scale production (300 kg)",
      "Pilot agreements with coating manufacturers",
    ],
  },
  {
    year: "2027",
    items: [
      "REACH dossier submitted",
      "EU regulatory approval",
      "Production scaled to 3,000 kg",
      "Offtake agreements signed",
      "Series A (€25–50M)",
    ],
  },
  {
    year: "2028",
    items: [
      "Market launch of 2-FMA coatings",
      "Strategic partnerships with Hempel, Jotun",
      "Geographic expansion begins",
    ],
  },
  {
    year: "2029+",
    items: [
      "Break-even at 100+ tonnes",
      "Large-scale production",
      "Leading supplier of sustainable coatings",
    ],
  },
];

export default function TimeLine({
  milestones = roadmapMilestones,
  title = "Project Timeline",
  subtitle = "Our development journey and milestones",
}: {
  milestones?: TimelineMilestone[];
  title?: string;
  subtitle?: string;
}) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const toggleExpand = (index: number) => {
    if (expandedIndex === index) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(null);
      const timer = setTimeout(() => {
        setExpandedIndex(index);
        clearTimeout(timer);
      }, 300);
    }
  };

  return (
    <div className="mx-auto px-4 py-12 max-w-5xl">
      <motion.h1
        className="text-3xl md:text-4xl font-bold mb-2 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {title}
      </motion.h1>

      <motion.p
        className="text-muted-foreground text-center mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {subtitle}
      </motion.p>

      <div className="relative">
        <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-primary/20 z-0" />

        {milestones.map((item, index) => (
          <motion.div
            key={item.year}
            className={`mb-12 relative z-10 flex flex-col ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-primary z-10" />

            <div
              className={`md:w-1/2 flex ${
                index % 2 === 0
                  ? "md:justify-end md:pr-8"
                  : "md:justify-start md:pl-8"
              }`}
            >
              <motion.div className="mb-4 md:mb-0" whileHover={{ scale: 1.05 }}>
                <Badge
                  variant="outline"
                  className="text-sm py-1 px-3 bg-primary/5 border-primary/20"
                >
                  <Calendar className="w-4 h-4 mr-1" />
                  {item.year}
                </Badge>
              </motion.div>
            </div>

            <div
              className={`md:w-1/2 ${index % 2 === 0 ? "md:pl-8" : "md:pr-8"}`}
            >
              <motion.div
                layout
                className="w-full"
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="overflow-hidden border-primary/10 shadow-lg hover:shadow-xl hover:border-[var(--teal)] transition-all duration-300">
                  <CardContent className="p-0">
                    <div
                      className="p-6 cursor-pointer flex justify-between items-center"
                      onClick={() => toggleExpand(index)}
                    >
                      <div>
                        <h3 className="text-xl font-bold text-primary">
                          {item.year} Milestones
                        </h3>
                        <p className="text-lg font-medium">{item.year}</p>
                        <p className="text-sm text-muted-foreground mt-1">
                          {item.items.length} milestone
                          {item.items.length !== 1 ? "s" : ""}
                        </p>
                      </div>
                      <motion.div
                        animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown className="w-5 h-5 text-muted-foreground" />
                      </motion.div>
                    </div>

                    <AnimatePresence>
                      {expandedIndex === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6 pt-2 border-t border-border/50">
                            <div className="mb-4">
                              <h4 className="text-sm font-semibold flex items-center mb-2">
                                <Briefcase className="w-4 h-4 mr-2 text-primary" />
                                Milestones
                              </h4>
                              <ul className="grid grid-cols-1 gap-2">
                                {item.items.map((event, i) => (
                                  <motion.li
                                    key={i}
                                    className="flex items-start gap-2"
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{
                                      duration: 0.3,
                                      delay: i * 0.1,
                                    }}
                                  >
                                    <span className="mt-2 size-1 shrink-0 rounded-full bg-primary/50" />
                                    <span className="text-sm text-muted-foreground">
                                      {event}
                                    </span>
                                  </motion.li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
