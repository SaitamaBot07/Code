package Class;

public class Employee {
    private String name;
    private double baseSalary, bonuses;

    public Employee(String  name, double baseSalary, double bonuses){

        this.name = name;
        this.baseSalary = baseSalary;
        this.bonuses = bonuses;

    }

    public String getName(){
        return name;
    }

    public void setName(String name){
        this.name = name;
    }

    public double getSalary(){
        return baseSalary;
    }

    public void setSalary(double baseSalary){
        this.baseSalary =  baseSalary;
    }

    public double getBonuses(){
        return bonuses;
    }

    public void setBonuses(double bonuses){
        this.bonuses = bonuses;
    }

    public double calculateSalary(){
        return baseSalary + bonuses;
    }
}