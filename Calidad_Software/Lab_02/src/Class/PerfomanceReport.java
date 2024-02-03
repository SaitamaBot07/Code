package Class;

public class PerfomanceReport {

    public String generateReport (Employee employee){

        StringBuilder report = new StringBuilder();
        
        report.append("Reporte desempeño del empleado").append(employee.getName()).append("\n");
        report.append("Salario Base:").append(employee.getSalary()).append("\n");
        report.append("Bonos:").append(employee.getBonuses()).append("\n");
        report.append("Total Salario:").append(employee.calculateSalary()).append("\n");

        return report.toString();

    }


    
}
