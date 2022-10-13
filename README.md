please - npm install

Short Explaination on why one to many sucks so i decided to manually query (at least with books-authors-categories):
While it sould have been nice if each author object had refrenced it's own books in it (or each book would refrence it's author object), it's a giant mess from multiple angles because you need to refrence by id and because:

1. Which object to we create first? How do I know all of the author's book IDs if I haven't created thier objects yet?
But if I create the books first, how will i know their object IDs?
The official way to this is to create one of the objects, then the second object and then update the first object (big mess).

2. If we would have used double refrencing like we planned in the beginning (author refrences books and books refrences authors) we would have had to pointers to manage (even more with the categories).

3. If we would have refrenced it like this, to get all books for an author would look like :
 "localhost:3000/author/books/6347dc6dfff8da2a7a186c79"
we have to refrence the author's objectID

but with queries it's more elegant:
"localhost:3000/author/books/Stephen King"
we simply pass the author's name and use it to query the books table.

