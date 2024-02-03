package Activity_04;


public interface IdispositivosEntrada {

    interface Iconectar {
        void conectar();  
    }  
    
    interface Idesconectar {
        void desconectar();
    }
    
    interface IprocesarEntrada{
        void procesarEntrada();
    }

    interface IencenderRGB {
        void encenderRGB();
    }

}