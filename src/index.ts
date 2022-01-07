const app = document.getElementById("app");
if (app) {
  app.innerHTML = `
  <h1>Type Guards</h1>
  <p>As you work through fixing the type errors in this section, it might be tempting to change the parameter or return types for these
  functions. <strong>Don't</strong>. The purpose of this exercise is to practice type guards. It's possible to fix the
  type errors without making any changes. You'll find the practice functions in the <code>/src/typeGuards.ts</code> folder.
  `;
}
