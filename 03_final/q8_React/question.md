When does React's Virtual DOM update the real DOM?

### Answer:

After the render function is completed, the Virtual DOM is updated with the changes. Only React knows exactly when to update the real DOM, and changes are sent in batches instead of each individual change.