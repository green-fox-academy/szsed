// # Blog

//  -  Reuse your `BlogPost` class
//  -  Create a `Blog` class which can
//      -  store a list of BlogPosts
//      -  add BlogPosts to the list
//      -  delete(int) one item at given index
//      -  update(int, BlogPost) one item at the given index and update it with another BlogPost

'use strict';

import BlogPost from './blog-post';

class Blog {

    postList: BlogPost[] = [];

    add (blogPost: BlogPost){
        this.postList.push(blogPost);
    }

    delete(index: number){

        try {
            if (this.postList[index] == undefined)
            throw new Error('invalid index number: that animal doesn\'t exist');
            
            this.postList.splice(index, 1);
        } catch (error) {
            console.log(error.message);
        }
    }

    update(index: number, newPost: BlogPost){

        try {
            if (this.postList[index] == undefined)
            throw new Error('invalid index number: that animal doesn\'t exist');

            this.postList.splice(index, 1, newPost);
        } catch (error) {
            console.log(error.message);
        }
    }

}

let myBlog = new Blog ();
myBlog.add(new BlogPost('John Doe', 'Lorem Ipsum', 'Lorem ipsum dolor sit amet.', '2000.05.04.'));
myBlog.add(new BlogPost('Tim Urban', 'Wait but why', 'A popular long-form, stick-figure-illustrated blog about almost everything.', '2010.10.10.'));
myBlog.add(new BlogPost('William Turton', 'One Engineer Is Trying to Get IBM to Reckon With Trump', 'Daniel Hanley, a cybersecurity engineer at IBM, doesn’t want to be the center of attention. When I asked to take his picture outside one of IBM’s New York City offices, he told me that he wasn’t really into the whole organizer profile thing.', '2017.03.28'));

console.log(myBlog);

myBlog.delete(3);
myBlog.update(5, new BlogPost('Tim Urban', 'Wait but why', 'A popular long-form, stick-figure-illustrated blog about almost everything.', '2010.10.10.'));
myBlog.update(0, new BlogPost('Tim Urban', 'Wait but why', 'A popular long-form, stick-figure-illustrated blog about almost everything.', '2010.10.10.'))
console.log(myBlog);
myBlog.delete(0);
console.log(myBlog);