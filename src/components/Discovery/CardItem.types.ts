export interface CardItemProps {
    id: number;
    title: string;
    description: string;
    price: string;
    handleClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  }