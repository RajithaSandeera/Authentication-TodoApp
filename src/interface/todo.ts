export interface TodoDto {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

export interface DataType {
  key: React.Key;
  title: string;
  description: string;
  action: string;
}