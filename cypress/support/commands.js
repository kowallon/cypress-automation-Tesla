Cypress.Commands.add(
    "getAny",
    { prevSubject: "element" },
    (subject, size = 1) => {
      cy.wrap(subject).then((elementList) => {
        const sample = Cypress._.sampleSize(elementList.get(), size);
        const finalEl = sample.length > 1 ? sample : sample[0];
        cy.wrap(finalEl);
      });
    }
  );