import { element, by, ElementFinder } from 'protractor';

interface PersonalInformation {
  firstName: string;
  lastName: string;
  sex: string;
  experience: number;
  profession: string[];
  tools: string[];
  continent: string;
  commands: string[];
}

export class PersonalInformationPage {
  private firstNameField: ElementFinder;
  private lastNameField: ElementFinder;
  private sendButton: ElementFinder;
  private pageTitleLabel: ElementFinder;

  constructor() {
    this.firstNameField = element(by.name('firstname'));
    this.lastNameField = element(by.name('lastname'));
    this.sendButton = element(by.id('submit'));
    this.pageTitleLabel = element(by.id('content')).element(by.tagName('h1'));
  }

  private sexOption(sex: string): ElementFinder {
    return element(by.css(`[name="sex"][value="${sex}"]`));
  }

  private experienceOption(years: number): ElementFinder {
    return element(by.css(`[name="exp"][value="${years}"]`));
  }

  private professionOption(profession: string): ElementFinder {
    return element(by.css(`[name="profession"][value="${profession}"]`));
  }

  private toolsOption(tool: string): ElementFinder {
    return element(by.css(`[name="tool"][value="${tool}"]`));
  }

  private continentOption(continent: string): ElementFinder {
    return element(by.id('continents')).element(by.cssContainingText('option', continent));
  }

  private seleniumCommandOption(command: string): ElementFinder {
    return element(by.id('selenium_commands')).element(by.cssContainingText('option', command));
  }

  public async getPageTitle(): Promise<string> {
    return await this.pageTitleLabel.getText();
  }

  public async fillForm(form: PersonalInformation): Promise<void> {
    await this.firstNameField.sendKeys(form.firstName);
    await this.lastNameField.sendKeys(form.lastName);
    await this.sexOption(form.sex).click();
    await this.experienceOption(form.experience).click();

    for (const name of form.profession) {
      await this.professionOption(name).click();
    }

    for (const name of form.tools) {
      await this.toolsOption(name).click();
    }

    await this.continentOption(form.continent).click();

    for (const name of form.commands) {
      await this.seleniumCommandOption(name).click();
    }
  }

  public async submit(form: PersonalInformation): Promise<void> {
    await this.fillForm(form);
    await this.sendButton.click();
  }
}
