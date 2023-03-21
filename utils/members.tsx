/**
 * A member type.
 *
 * @typedef {Object} MemberType
 * @property {string} name - The name of the member type.
 * @property {string} label - The label of the member type.
 * @property {string} header - The header of the member type.
 */
export interface MemberType {
  name: string;
  label: string;
  header: string;
}

/**
 * A member.
 *
 * @typedef {Object} Member
 * @property {MemberType} type - The member type.
 * @property {string} name - The name of the member.
 * @property {string} position - The position of the member.
 * @property {string} linkedin - The LinkedIn URL of the member.
 * @property {string | null} email - The email of the member. Can be null if not specified.
 * @property {number} group - The group of the member. Lower numbers indicate seniority within the type.
 * @property {string} image - The image of the member.
 */
export interface Member {
  type: MemberType;
  name: string;
  position: string;
  linkedin: string;
  email: string | null;
  group: number;
  image: string;
}

/**
 * All member types.
 */
export const memberTypes: MemberType[] =
  require("../public/member_types.json").map((memberType: any) => {
    return {
      name: memberType.name,
      label: memberType.label,
      header: memberType.header,
    };
  });

/**
 * All members.
 */
export const members: Member[] = require("../public/members.json").map(
  (member: any) => {
    return {
      type: memberTypes.find(
        (memberType: any) => memberType.name === member.type
      ),
      name: member.name,
      position: member.position,
      linkedin: member.linkedin,
      email: member.email,
      group: member.group,
      image: member.image,
    };
  }
);

/**
 * Get all members partitioned by their group.
 * @param {MemberType} type - The member type to filter by.
 * @returns {Member[][]} Array of member groups. Each group is an array of members.
 */
export const getMembersByGroup = (type?: MemberType) => {
  const memberGroups: Member[][] = [];
  members
    .filter((member) => !type || member.type.name === type.name)
    .sort((a, b) => a.group - b.group)
    .forEach((member) => {
      if (!memberGroups[member.group]) {
        memberGroups[member.group] = [];
      }
      memberGroups[member.group].push(member);
    });
  return memberGroups;
};

/**
 *  Get all members of a given type.
 * @param {MemberType} type - The member type to filter by.
 * @returns {Member[]} Array of members.
 */
export const getMembersByType = (type?: MemberType) => {
  const memberGroups: Member[][] = getMembersByGroup(type);
  return memberGroups.flat();
};
