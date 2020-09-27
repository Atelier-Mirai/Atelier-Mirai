include HtmlBuilder

def some_method
  # ...何らかの処理を追加...
  'awesome method'
end

class String
  def to_amazon_url
    "https://www.amazon.co.jp/gp/product/#{self}/ref=as_li_tl?ie=UTF8&camp=247&creative=1211&creativeASIN=#{self}&linkCode=as2&tag=ateliermira05-22&linkId=d9a444d6a2c93e24e44eb0b3bd6d3981"
  end

  def to_amazon_image
    "//ws-fe.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=JP&ASIN=#{self}&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=ateliermira05-22"
  end
end

def book_intro(book, format: :simple)
  url   = book.isbn.to_s.to_amazon_url
  image = book.isbn.to_s.to_amazon_image
  title = book.title
  desc  = book.desc

  case format
  when :simple
    content_tag :div, class: 'column' do
      link_to url, class: 'ui card', target: '_blank' do
        content_tag :div, class: 'image' do
          image_tag image
        end
      end
    end
  when :description
    link_to url, class: 'ui horizontal card', target: '_blank' do
      markup do |m|
        m.div(class: 'image', style: "background: none;") do
          m << image_tag(image, style:"width: 150px; height: auto;")
        end
        m.div(class: 'content') do
          m.div(class: 'ui header') do
            m << title
          end
          m.div(class: 'description') do
            desc.split("\n").each_with_index do |d, i|
              m.p do
                m << d
              end
            end
          end
        end
      end
    end
  when :large_description
    link_to url, class: 'ui card', target: '_blank', style: 'text-decoration: none;' do
      markup do |m|
        m.div(class: 'image') do
          m << image_tag(image, style:"width: 300px; height: auto;")
        end
        m.div(class: 'content') do
          m.div(class: 'header') do
            m << title
          end
          m.div(class: 'description') do
            desc.split("\n").each do |d|
              m.p do
                m << d
              end
            end
          end
        end
      end
    end
  end
end

def table_body
  markup(:tr) do |m|
    m.td << 'aiueo'
    m.td 'kakikukeko'
    m.td(:class => 'date') do
      m.text '3/1'
    end
  end
end

def table_row(description: 'aaa')
  markup(:tr) do |m|
    # unless view_context.instance_variable_get(:@staff_member)
    #   m.td do
    #     m << link_to(member.family_name + member.given_name,
    #      [ :admin, member, :staff_events ])
    #   end
    # end
    m.td description
    m.td(:class => "date today") do
      # m.text occurred_at.strftime("%Y/%m/%d %H:%M:%S")
      m.text 'aiueo!'
    end
  end
end

def table_user(users)

  markup do |m|
    m.table(id: 'users') do
      m.tr do
        m.th 'Family Name'
        m.th 'Given Name'
      end
      users.each do |u|
        attrs = {}
        # attrs[:class] = 'admin' if u.admin?
        m.tr(attrs) do
          m.td(:class => 'family_name bold') do
            m.text u[:family_name]
          end
          m.td u[:given_name]
        end
      end
    end
  end
end
