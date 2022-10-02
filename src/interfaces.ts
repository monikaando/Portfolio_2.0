//navigation-slice
export interface NavigationState {
  activeTab: string;
}

//Projects Tab
export interface Test {
  login: string;
  password: string;
}
export interface Project {
  year: string;
  id: string;
  videoId: string;
  title: string;
  description: string;
  description2?: string;
  stack: string;
  live_version?: string;
  test?: Test;
  github?: string;
}
