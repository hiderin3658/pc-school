'use client'

import { CheckCircle } from 'lucide-react'
import { useLanguage } from '@/lib/hooks/useLanguage'

export function CurriculumTimeline() {
  const { t } = useLanguage()
  
  const timelineData = [
    {
      title: t('basicPhase'),
      duration: t('basicPhaseDuration'),
      items: [
        t('basicItem1'),
        t('basicItem2'),
        t('basicItem3'),
      ],
    },
    {
      title: t('practicalPhase'),
      duration: t('practicalPhaseDuration'),
      items: [
        t('practicalItem1'),
        t('practicalItem2'),
        t('practicalItem3'),
      ],
    },
    {
      title: t('projectPhase'),
      duration: t('projectPhaseDuration'),
      items: [
        t('projectItem1'),
        t('projectItem2'),
        t('projectItem3'),
      ],
    },
  ]

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h3 className="text-2xl font-bold mb-8 text-center">{t('timelineTitle')}</h3>
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200" />

        {/* Timeline items */}
        <div className="space-y-12">
          {timelineData.map((phase, index) => (
            <div key={index} className="relative pl-12">
              {/* Timeline dot */}
              <div className="absolute left-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-white" />
              </div>

              {/* Content */}
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="text-xl font-semibold">{phase.title}</h4>
                  <span className="text-sm text-gray-500">{phase.duration}</span>
                </div>
                <ul className="space-y-2">
                  {phase.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
