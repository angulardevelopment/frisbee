# Frisbee Golf Storefront

Lets build a frisbee golf storefront! There are lots of different types of
frisbees for frisbee golf and we need to organize them in a way that users
can see what is for sale and help them pick the best frisbee to buy.

We will be building a list view that displays all the frisbees with a
little bit of information for each frisbee and a detail view that shows
one frisbee with more information.

We will leave it up to you to decide exactly what it should look like and
how to put this site together. We've just put together a couple of stubbed
out components to start with and a service to load the frisbee data from
the server.

### Requirements

- On the frisbee list view render the frisbees grouped by category in this order: Distance Drivers, Fairway Drivers, Midrange, and Putters
- When a user clicks on one of the frisbees in the list view they should be taken to a detail view that shows all of the information available about the frisbee that was selected in the previous view.
- Style the list view in a way that is reponsive. On larger screens lets show at more frisbees per row and on smaller screens we will show less frisbees per row.
- The detail view should have a back button that will take the user back to the list view.
- The detail should view should also have a call to action button to buy the disc for the listed price. (the price will be an integer of cents and should be displayed as dollars)
- Add any additional styles to the site that make it "look good" whatever that might mean to you.

### Components and Service

There are three components that have been created that you can use for this. Feel free to create any additional components that you might need.

- app-frisbee-list: This component will use the frisbee service to get a list of frisbees and will render the frisbee component once for each of the frisbee objects in the data.
- app-frisbee: This component will be a reusable component that will be rendered multiple times in the frisbee list component.
- app-frisbee-detail: This component will show all of the information of one frisbee. It will load the data from the frisbee service.

The frisbee service has two functions available that work right now. One that gets you an observable list of frisbees and another that will get you an individual frisbee by passing in the id of the frisbee.

### Mockups

The idea for this came from an actual e-commerce site that sells frisbees. Here is an example of what the list view might look like:

https://infinitediscs.com/category/Infinite-Discs

And here is an example of what the detail might look like:

https://infinitediscs.com/Infinite-Discs-Aztec
