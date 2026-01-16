#import library
from urllib.request import urlopen

url = "http://olympus.realpython.org/profiles/dionysus"

#open web page
page = urlopen(url)

#read html from page and decode
html_bytes = page.read()
html = html_bytes.decode("utf-8")

#print html page
print(html)

#access part of the page 
title_index = html.find("<title>")
print(title_index)

start_index = html.find("<title>") + len("<title>")
print(start_index)
end_index = html.find("</title>")
print(end_index)
title = html[start_index:end_index]
print(title)