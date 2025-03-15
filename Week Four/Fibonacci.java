public class Fibonacci{
    public static void main(String args[]){
        int terms = 5;
        System.out.println(calculateFib(terms))
    }
    public static calculateFib(int terms){
        if(terms<=2){
            return 1;
        }
        else{
            return calculateFib(terms-1) + calculateFib(terms-2);
        }
    }
}