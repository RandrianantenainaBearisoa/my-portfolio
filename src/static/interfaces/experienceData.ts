export interface ExperienceData {
  experience_type: string
  entity: {
    name: string
    link: string
  }
  start_date: string
  end_date: string
  role: string
  contribution: string
  technos: Array<{
    name: string
    icon: string
  }>
  enhanced_skills: {
    hard: string[]
    soft: string[]
  }
  notable_achievements: string[]
}
