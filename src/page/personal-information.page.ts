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
    this.pageTitleLabel = element(by.css('#content h1'));
  }

  private getSexOption(sex: string): ElementFinder {
    return element(by.css(`[name="sex"][value="${sex}"]`));
  }

  private getExperienceRadioButton(years: number): ElementFinder {
    return element(by.css(`[name="exp"][value="${years}"]`));
  }

  private getProfessionRadioButton(profession: string): ElementFinder {
    return element(by.css(`[name="profession"][value="${profession}"]`));
  }

  private getToolsRadioButton(tool: string): ElementFinder {
    return element(by.css(`[name="tool"][value="${tool}"]`));
  }

  private getContinentChoice(continent: string): ElementFinder {
    return element(by.id('continents')).element(by.cssContainingText('option', continent));
  }

  private seleniumCommandsListChoice(command: string): ElementFinder {
    return element(by.id('selenium_commands')).element(by.cssContainingText('option', command));
  }

  public async getPageTitle(): Promise<string> {
    return await this.pageTitleLabel.getText();
  }

  public async fillForm(form: PersonalInformation): Promise<void> {
    await this.firstNameField.sendKeys(form.firstName);
    await this.lastNameField.sendKeys(form.lastName);
    await this.getSexOption(form.sex).click();
    await this.getExperienceRadioButton(form.experience).click();

    for (const profession of form.profession) {
      await this.getProfessionRadioButton(profession).click();
    }

    for (const tool of form.tools) {
      await this.getToolsRadioButton(tool).click();
    }

    await this.getContinentChoice(form.continent).click();

    for (const commands of form.commands) {
      await this.seleniumCommandsListChoice(commands).click();
    }
  }

  public async submit(form: PersonalInformation): Promise<void> {
    await this.fillForm(form);
    await this.sendButton.click();
  }
}
