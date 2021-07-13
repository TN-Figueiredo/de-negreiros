export const validateEmail = (Rule) =>
  Rule.regex(
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
    {
      name: "email", // Error message is "Does not match email-pattern"
      invert: false, // Boolean to allow any value that does NOT match pattern
    }
  );

export const validatePhone = (Rule) =>
  Rule.regex(/\d{11}/, {
    name: "whastapp", // Error message is "Does not match whatsapp-pattern"
    invert: false, // Boolean to allow any value that does NOT match pattern
  });

export const validateYoutubeUrl = (Rule) =>
  Rule.regex(
    /^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube\.com|youtu.be))(\/(?:[\w\-]+\?v=|embed\/|v\/)?)([\w\-]+)(\S+)?$/,
    {
      name: "url",
      invert: false,
    }
  );
