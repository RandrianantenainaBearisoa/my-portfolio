<script lang="ts" setup>
import i18n from "@/plugins/i18n";
</script>

<template>
  <div class="gradiented">
    <div class="info-card">
      <div>
        <dl>
          <dt>
            {{ i18n.global.t("labels.about.full_name") }} :
          </dt>
          <dd>
            RANDRIANANTENAINA Bearisoa
          </dd>
        </dl>
        <dl>
          <dt>
            {{ i18n.global.t("labels.about.age") }} :
          </dt>
          <dd>
            23 {{ i18n.global.t("labels.about.yo") }}
          </dd>
        </dl>
        <dl>
          <dt>
            {{ i18n.global.t("labels.about.job_title.label") }} :
          </dt>
          <dd>
            {{ i18n.global.t("labels.about.job_title.title") }}
          </dd>
        </dl>
      </div>
      <table>
        <tbody>
          <tr>
            <th>
              {{ i18n.global.t("labels.about.hobbies") }} :
            </th>
            <th>
              {{ i18n.global.t("labels.about.interests") }} :
            </th>
          </tr>
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
        </tbody>
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
