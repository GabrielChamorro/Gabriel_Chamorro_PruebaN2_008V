import { ProductosFormato } from "./GB_CH_interfazProductos"

export interface RespuestaAPIProductosFormato {
    products: ProductosFormato[],
    total: number,
    skip: number | null,
    limit: number,  
}