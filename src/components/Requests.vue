<template>
    <b-table
        :data="tableDataSimple"
        :opened-detailed="defaultOpenedDetails"
        detailed
        detail-key="id"
        @details-open="(row, index) => $toast.open({
                    duration: 5000,
                    message: `Apply to ${row.first_name} right now on skillmatrix.be!`,
                    position: 'is-bottom',
                    type: 'is-info'
                })"
    >

        <template slot-scope="props">
            <b-table-column label="ID" width="40"  numeric>
                {{ props.row.id }}
            </b-table-column>

            <b-table-column label="Profile">
                {{ props.row.first_name }}
            </b-table-column>

            <b-table-column label="Location">
                {{ props.row.gender }}
            </b-table-column>

            <b-table-column label="Languages">
                {{ new Date(props.row.date).toLocaleDateString() }}
            </b-table-column>

            <b-table-column label="Price" width="40" numeric>
                <span class="tag is-success">
                    {{ props.row.id }}
                </span>
            </b-table-column>

        </template>

        <template slot="detail" slot-scope="props">
            <article class="media">
                <figure class="media-left">
                    <p class="image is-64x64">
                        <img src="static/img/placeholder-128x128.png">
                    </p>
                </figure>
                <div class="media-content">
                    <div class="content">
                        <p>
                            <strong>Start Date</strong>
                            <small>{{ new Date(props.row.date).toLocaleDateString() }}</small>
                            <br>
                            <strong>End Date</strong>
                            <small>{{ new Date(props.row.date).toLocaleDateString() }}</small>
                            <br>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Proin ornare magna eros, eu pellentesque tortor vestibulum ut.
                            Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
                        </p>
                    </div>
                </div>
            </article>
        </template>
    </b-table>
</template>

<script>
    export default {
        data() {
            const tableDataSimple = [
                { 'id': 1, 'first_name': 'Jesse', 'last_name': 'Simmons', 'date': '2016-10-15 13:43:27', 'gender': 'Male' },
                { 'id': 2, 'first_name': 'John', 'last_name': 'Jacobs', 'date': '2016-12-15 06:00:53', 'gender': 'Male' },
                { 'id': 3, 'first_name': 'Tina', 'last_name': 'Gilbert', 'date': '2016-04-26 06:26:28', 'gender': 'Female' },
                { 'id': 4, 'first_name': 'Clarence', 'last_name': 'Flores', 'date': '2016-04-10 10:28:46', 'gender': 'Male' },
                { 'id': 5, 'first_name': 'Anne', 'last_name': 'Lee', 'date': '2016-12-06 14:38:38', 'gender': 'Female' }
            ]

            return {
                tableDataSimple,
                defaultOpenedDetails: [1]
            }
        }
    }
</script>
