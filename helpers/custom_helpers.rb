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

def book_intro(isbn)
  url   = isbn.to_s.to_amazon_url
  image = isbn.to_s.to_amazon_image

  content_tag :div, class: 'column' do
    link_to url, class: 'ui card', target: '_blank' do
      content_tag :div, class: 'image' do
        image_tag image
      end
    end
  end
end


def chirashi_tag(title: , filename: )
  "<div class='col-xs-12 col-md-4'>" +
    "<div class='card leaflet'>" +
      "<a href=\"/pdf/#{filename}.pdf\">" +
        "<img src=\"/pdf/thumbnail/#{filename}.jpg\" class='card-img-top w-100' alt=\"\">" +
      "</a>" +
      "<div class='card-footer'>" +
          "#{title}" +
      "</div>" +
    "</div>" +
  "</div>".html_safe
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
