package Activity_02;

public class ProcesadorDePedidos implements AgregarProducto {
    public double calcularPrecioTotal(Pedido pedido) {
        double precioLibra = obtenerPrecioUnitario(pedido.getProducto());
        return pedido.getCantidad() * precioLibra;
    }

    private double obtenerPrecioUnitario(String producto) {
        if ("carne de res".equals(producto)) {
            return 15000.0;
        } else if ("carne de cerdo".equals(producto)) {
            return 11000.0;
        } else if ("carne de pollo".equals(producto)) {
            return 9000.0;
        } else if ("carne de chiguiro".equals(producto)) {
            return 18000.0;
        } else if ("carne de cuy".equals(producto)) {
            return 25000.0;
        } else {
            return 0.0;
        }
    }

    public void agregarProducto(String producto, double precioUnitario) {
        //
    }
}
