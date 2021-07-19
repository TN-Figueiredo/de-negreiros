import { graphql, useStaticQuery } from "gatsby";

const SanityLargeSectionQuery = () => {
  return useStaticQuery(graphql`
    fragment LargeSection on SanityLargeSection {
      _key
      _type
      form {
        _key
        _type
        title
        backgroundColor
        submit
        fields {
          ... on SanityInputText {
            _key
            _type
            placeholder
            title
            maxLength
            required
          }
          ... on SanityInputMessage {
            _key
            _type
            placeholder
            title
            maxLength
            required
          }
          ... on SanityInputSelect {
            _key
            _type
            options
            title
            required
          }
        }
      }
      tabbedContent {
        _key
        _type
        backgroundColor
        title
        content {
          _key
          _rawBlock
          _type
          title
          block {
            _key
            _type
            children {
              _key
              _type
              marks
              text
            }
          }
        }
      }
      select
      content {
        ... on SanityTitleAndContent {
          _key
          _type
          block {
            children {
              _key
              _type
              text
              marks
            }
            _key
            _type
          }
          title
        }
        ... on SanityYoutube {
          _key
          _type
          description
          url
        }
      }
    }
  `);
};

export default SanityLargeSectionQuery;
