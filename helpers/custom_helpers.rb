include HtmlBuilder

def some_method
  # ...何らかの処理を追加...
  'awesome method chirashi'
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
