
puts "Programa para buscar los 'Unos' (1) dentro de un número en notación binaria"
puts
puts "Introduzca número a Analizar:"
num = gets.chomp

result = num.to_i.to_s(2).scan(/1/).count

if result == 0
  puts "El valor no es un entero"
else
  puts "El número #{num.to_i} contien #{result} unos en notación binaria"
end
puts ""