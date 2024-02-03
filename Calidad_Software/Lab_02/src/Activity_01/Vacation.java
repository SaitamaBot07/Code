package Activity_01;

public class Vacation {
    private int availableDays;

    public Vacation(int availableDays){
        this.availableDays = availableDays;
    }

    public int getAvailableDays(){
        return availableDays;
    }

    public void setAvailableDays(int availableDays){

        this.availableDays = availableDays;
    }

    public void requestVacation(int days){
        if (days < availableDays){
            System.out.println("Vacaciones aprobadas por" + days + "días.");
            availableDays -= days;

        }else{
            System.out.println("Perdio papi, trabaje");
        }

    }

}
