require 'fibonacci'

puts "Generando Números de Fibonacci desde un Archivo de Texto"
puts ""
puts "Introduzca la Dirección del Archivo a Analizar:"
dir = gets.chomp
if !File.directory?(dir)

  if File.exist?(dir)

    lines = []
    fib = Fibonacci.new

    File.readlines(dir).each do |line|
      num = line.gsub("\n","").to_i
      lines.push([num: num, result: fib[num]])
    end

    if lines.count>0
      lines.each do |l|
        puts "#{l[0][:num]}: #{l[0][:result]}"
      end
    else
      puts "El archivo no tiene valores válidos"
    end
  else
    puts "El archivo no existe"
  end

else
  puts "No es un archivo, es un directorio"
end
puts ""