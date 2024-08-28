require "yaml"

# Book 構造体定義
Book = Struct.new(:title, :desc, :isbn, :genre) do
  def to_starter
    <<~EOS
    === #{self.title}
    //sideimage[#{self.isbn}][30mm][sep=5mm]{
    #{self.desc}
    //}

    EOS
  end
end

# YAMLデータ読み込み
data = open("./data/books.yml", "r") do |f|
         YAML.load(f)
       end

books = []
data.each do |datum|
  book = Book.new(datum["title"],
                  datum["desc"],
                  datum["isbn"].to_s,
                  datum["genre"])
  books << book
end



isbn = %w(
4802611897
4815618461
4295015113
4815615756
4297138050
4798159379
4297127458
4873114691
4798143499
4130624520
479817243X
4774196908
4822286398
4798154814
4797395451
4797341378
4764904713
4152093595
4480510435
4480016031
4062578514
406257795X
4274226298
4297124378
)

book = books.first

pp book
pp book.title
puts book.desc

puts book.to_starter
