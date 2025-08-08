interface SkillItem {
  name: string;
  icon: string;
}

export interface HardSkillsCategory {
  [key: string]: SkillItem[];
}
