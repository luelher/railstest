require 'palindrome'
require 'prime'

puts "Buscando el Número Palindrome Primo mas cercano a 1000:"
puts ""

num = 0;
result = "Es el palindrome primo mas largo de 1000";

1000.downto(1) do |i|
  if i.to_s.palindrome? and i.prime?
    num = i
    break
  end
end

puts "#{num} #{result}"
puts ""