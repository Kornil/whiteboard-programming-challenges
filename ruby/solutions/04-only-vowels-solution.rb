# Create a string of vowels
# Create an empty string that will store later the result
# Split string and loop through each character
# Check if character is a vowel, and if it is, shovel it in the empty string


def only_vowels?(str)
  vowels = "aeiou"
  new_str = ""
  words = str.split("")
  words.each do |char|
    if vowels.include?(char)
      new_str << char
    end
  end
  new_str
end