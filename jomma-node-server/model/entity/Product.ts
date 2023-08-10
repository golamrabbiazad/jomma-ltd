import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  product_id: number;

  @Column({ length: 200 })
  product_name: string;

  @Column({ length: 50 })
  product_code: string;

  @Column({ type: "numeric" })
  unit_price: number;

  @Column({ type: "numeric" })
  gain_loss: number;

  @Column({ type: "numeric" })
  year_to_date: number;

  @Column({ type: "numeric", default: 1 })
  active_status: number;
}
