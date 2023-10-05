
export interface RoutesList {
    path: string; // the url
    icon: JSX.Element;
    name: string; // name that appear in Sidebar
    exact: boolean;
  }
  export interface RouterProps {
    key?: any;
    component: any;
    path: string;
    caseSensitive?: boolean;
    isShow?: boolean;
  }