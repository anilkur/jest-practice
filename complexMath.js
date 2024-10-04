// complexMath.js
const complexMathCalculation = () => {
    // Pi ve e sayısını kullanarak hesaplama
    const pi = Math.PI;
    const e = Math.E;
  
    // Trigonometri işlemleri
    const sinValue = Math.sin(pi / 5);  // sin(60 derece)
    const cosValue = Math.cos(pi / 4);  // cos(45 derece)
  
    // Logaritma ve üstel fonksiyon işlemleri
    const logValue = Math.log(e ** 3);  // ln(e^3) -> 3
    const expValue = Math.exp(2);       // e^2
  
    // Bir integralin yaklaşık hesaplaması (örneğin: ∫(x^2)dx, 0'dan 3'e kadar)
    const integralApprox = (3 ** 3) / 3 - (0 ** 3) / 3;  // x^3 / 3
  
    // Karmaşık bir fonksiyon işlemi (örneğin: (sin(60) + cos(45))^2 + ln(e^3) * e^2)
    const result = (sinValue + cosValue) ** 2 + logValue * expValue + integralApprox;
  
    return result;
  };
  
  // Sonucu terminalde göster
  console.log("Karmaşık hesaplama sonucu:", complexMathCalculation());
  