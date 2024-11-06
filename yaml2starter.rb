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

isbns = %w(
  4802611897
  4815618461
  4295015113
  4815615756
  4297138050
  4798159379
  4297127458
  4873115655
  4873114691
  4798143499
  4130624520
  479817243X
  477415654X
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
)

starter = []
starter.push <<~EOS
  = 珠玉の名著のご紹介

  //abstract{
  プログラミングに関する様々な書籍が出版されております。その中から筆者のお勧めする名著をご紹介いたします。プログラムの初心者から中級者の方に向けての書籍となっております。読者の皆様が次の段階へ進む際にきっと役立ってくれることと思います。どうぞ、手に取って読み、自らの血肉として頂ければ幸いです。 @<fn>{fn-1}
  //}

  //footnote[fn-1][書籍紹介文から、引用・改変。]

EOS

isbns.each do |isbn|
  books.each do |book|
    if isbn == book&.isbn
      starter << book.to_starter
      break
    end
  end
end

puts starter
