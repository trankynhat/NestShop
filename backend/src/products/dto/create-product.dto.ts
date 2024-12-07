export class CreateProductDto {
    name: string;
    description: string;
    price: number;
    weight: number;
    category: string;
    images: string[]; // URL các hình ảnh sản phẩm
  }
  