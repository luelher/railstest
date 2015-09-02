
puts "Programa para buscar los 'Unos' (1) dentro de un numero en notacion binaria"
puts
puts "Introduzca numero a Analizar:"
num = gets.chomp

result = num.to_i.to_s(2).scan(/1/).count

if result == 0
  puts "El valor no es un entero"
else
  puts "El numero #{num.to_i} contien #{result} unos en notacion binaria"
end
puts ""