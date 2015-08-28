
class RespuestasController < ApplicationController

  def fibonacci

    archivo = params[:file]
    lines = []
    fib = Fibonacci.new

    File.readlines(archivo.tempfile).each do |line|
      num = line.gsub("\n","").to_i

      lines.push(num: num, result: fib[num])
    end

    render json: {data: lines } 

  end

  def palindrome

    result = []

    1000.downto(1) do |i|
      if i.to_s.palindrome? and i.prime?
        result.push(num: i, result: "Es el palindrome primo mas largo de 1000")
        break
      end
    end

    render json: {data: result } 
  end

  def unos

    numero = params[:numero]
    result = []

    result.push(num: numero, result: numero.to_i.to_s(2).scan(/1/).count )

    render json: {data: result } 
  end

end