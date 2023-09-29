export type ValidControls = "all" | 
  "accessibleAccordion" | "adaptiveCardDesignerHost" | "adaptiveCardHost" | 
  "animatedDialog" | "Carousel" | "ChartControl" | 
  "ComboBoxListItemPicker" | "Dashboard" | "DateTimePicker" | 
  "DragDropFiles" | "DynamicForm" | "EnhancedThemeProvider" | 
  "FieldCollectionData" | "FieldPicker" | "FilePicker" | 
  "FileTypeIcon" | "FolderExplorer" | "FolderPicker" |
  "GridLayout" | "IconPicker" | "IFrameDialog" |
  "IFramePanel" | "ListPicker" | "ListView" |
  "LocationPicker" | "Map" | "ModernAudio" |
  "ModernTaxonomyPicker" | "Pagination" | "PeoplePicker" |
  "Placeholder" | "Progress" | "RichText" |
  "SecurityTrimmedControl" | "SiteBreadcrumb" | "SitePicker" |
  "TaxonomyPicker" | "TaxonomyTree" | "Teams" |
  "TestControl" | "Toolbar" | "TreeView" |
  "UploadFiles" | "VariantThemeProvider" | "WebPartTitle";

export type ControlVisibility = {
  [K in ValidControls]: boolean;
}

export interface IControlsTestWebPartProps {
  title: string;
  description: string;
  paginationTotalPages: number;
  dynamicFormListId: string;
  controlVisibility: ControlVisibility
}
