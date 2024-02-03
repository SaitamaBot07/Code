package Activity_04;

public class Altavoces implements IdispositivosSalida{
    
    public void activar(){
        System.out.println("Dispositivo conectado");
    }

    public void desactivar(){
        System.out.println("Dispositivo Desconectado");
    }

    public void procesarSalida(){
        System.out.println("####");
    }

    public void reproducirSonido(){
        System.out.println("Sonido papan");
    }

}
