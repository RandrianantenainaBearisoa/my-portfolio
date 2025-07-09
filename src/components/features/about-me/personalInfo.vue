<template>
  <div class="gradiented">
    <div class="info-card">
      <div class="part-one">
        <dl>
          <dt>
            Full name :
          </dt>
          <dd>
            RANDRIANANTENAINA Bearisoa
          </dd>
        </dl>
        <dl>
          <dt>
            Age :
          </dt>
          <dd>
            23 years old
          </dd>
        </dl>
        <dl>
          <dt>
            Job-title :
          </dt>
          <dd>
            fullstack web developper
          </dd>
        </dl>
      </div>
      <table class="part-two">
        <thead>
          <th>
            Hobbies :
          </th>
          <th>
            Interests :
          </th>
        </thead>
        <tr>
          <td>
            <ul>
              <li>
                Playing guitare
              </li>
              <li>
                Reading
              </li>
            </ul>
          </td>
          <td>
            <ul>
              <li>
                AI
              </li>
              <li>
                GIS
              </li>
              <li>
                Data Science
              </li>
              <li>
                Music
              </li>
            </ul>
          </td>
        </tr>
      </table>
    </div>
  </div>

</template>

<script lang="ts">
export default {
  name: "personal-info",
};
</script>

<style lang="scss">
.gradiented {
  margin: auto;
  width: 320px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  background: linear-gradient(180deg, #add8e6 0%, #ffffff 100%);

  .info-card {
    width: 320px;
    height: 350px;
    background-color: #243748e6;
    border-radius: 10px;
    padding: 10px;
    transition: 500ms ease-in-out;

    td {
      ul {
        margin: 0px;
      }
    }

    table,
    th,
    td {
      border: solid 1px #add8e6;
      border-collapse: collapse;
    }

    &:hover {
      background-color: #243748c5;
      transform: scale(0.97);
      transition: 500ms;

      dt {
        text-decoration: underline;
      }

      dd {
        font-weight: 700;
      }

      table,
      th,
      td {
        border: solid 2px #add8e6;
        border-collapse: collapse;
      }
    }
  }

}
</style>
