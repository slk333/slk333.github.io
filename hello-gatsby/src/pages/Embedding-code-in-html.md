---
title: "Embedding code in html"
date: "2018-01-18"
---

If you want to embed some code in your article, and want it to look nice, there is a simple and quick way to do it. You can use **Prettify** by Google.

Take this piece of Swift code for exemple:


    let myName = "Aweb"
    print("Hello \(myName)")
    // prints "Hello Aweb"
        

Just embed your code in a pre tag, and use the relevant prettify class:


   
    ..
    let myName = "Aweb"
    print("Hello \(myName)")
    // prints "Hello Aweb
    ..
   

This will render like that:


    let myName = "Aweb"
    print("Hello \(myName)")
    // prints "Hello Aweb"
   

Don't forget to include Prettify at the end of the body, including or not languages plugins:


    <script src="https://cdn.rawgit.com/google/code-prettify/master/loader/run_prettify.js"></script>
    <script src="https://cdn.rawgit.com/google/code-prettify/master/src/lang-swift.js"></script>
   

And lastly you can pick a custom theme. For example, I'm using a dark mode theme, called "Desert":


    <link rel="stylesheet" href="https://cdn.rawgit.com/google/code-prettify/master/styles/desert.css">
  

### HTML

Embedding HTML is annoying because you cannot just type html code inside the pre tag. The raw html code would be interpreted as html and rendered differently that what you want. To fix that, you need to use an online [HTML entity encoder/decoder](https://mothereff.in/html-entities)

So, in order to get:


    <p style="color:beige">

        Embedding code in HTML

    </p>
      </pre>

You actually need to provide the encoded version:



    &#x3C;p style=&#x22;color:beige&#x22;&#x3E;

        Embedding code in HTML

    &#x3C;/p&#x3E;
    </pre>
    </pre>

### Conclusion

So all in all, it's pretty cumbersome to write html snippets, even if you use an online encoder/decoder. For other languages like Swift, it remains reasonnably easy to stylise them.