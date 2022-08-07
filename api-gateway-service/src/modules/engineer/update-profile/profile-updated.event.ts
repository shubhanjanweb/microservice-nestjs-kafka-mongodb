interface Skill {
  skillCode: string;
  expertiseLevel: number;
}

interface UpdateProfileRequest {
  readonly name?: string;
  readonly associateId?: string;
  readonly mobile?: string;
  readonly email?: string;
  readonly skills?: Skill[];
}

export class ProfileUpdatedEvent {
  constructor(
    public readonly value: UpdateProfileRequest,
    public readonly profileId: string
  ) { }

  toString() {
    return JSON.stringify({
      value: this.value,
      header: this.profileId
    });
  }
}